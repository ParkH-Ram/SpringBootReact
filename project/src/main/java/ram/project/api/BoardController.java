package ram.project.api;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ram.project.dto.BoardDeleteDto;
import ram.project.dto.BoardDto;
import ram.project.entity.Board;
import ram.project.service.BoardService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService; //Autowired 로 스프링 빈에 등록

    @GetMapping("/api/board-list")
    public WrapperClass board_list() {
        List<Board> boardList = boardService.findBoards();
        List<BoardDto> boardDtoList = boardList.stream().map(b -> new BoardDto(b)).collect(Collectors.toList());
        return new WrapperClass(boardDtoList);
    }

    //상세보기
    @GetMapping("/api/board-detail{boardId}")
    public WrapperClass board_detail(@PathVariable("boardId") Long boardId) {
        Board board = boardService.findOne(boardId);
        BoardDto boardDto = new BoardDto(board); // 엔티티를 dto 로 바꾸고 래퍼 클래스로 바꿔서 보내준다.
        return new WrapperClass(boardDto);
    }

    // 게시판 생성
    @PostMapping("/api/create-board")
    public ResponseEntity create_board(@RequestBody BoardDto boardDto) {
        System.out.println("생성된 dto " + boardDto);
        HttpHeaders headers = new HttpHeaders();
        Map<String, String> body = new HashMap<>();
        HttpStatus status = HttpStatus.CREATED; // 201 잘생성 되었음을 의미

        try {
            Board board = new Board(
                boardDto.getId(),
                boardDto.getTitle(),
                boardDto.getContent()
            );
            boardService.create(board);

        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST; // 400에러
            System.out.println("생성 에러 " + e);
        }
        return new ResponseEntity(body, headers, status);
    }

    // 수정
    @PutMapping("/api/update-board")
    public ResponseEntity update_board(@RequestBody BoardDto boardDto) {
        System.out.println("수정된 내용은 " + boardDto);
        HttpHeaders headers = new HttpHeaders();
        Map<String, String> body = new HashMap<>();
        HttpStatus status = HttpStatus.NO_CONTENT; // 204 -> 수정이 정상적으로

        try {
            boardService.update(boardDto.getId(), boardDto.getTitle(), boardDto.getContent());

        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST; // 400 에러
            System.out.println("update_board/에러" + e);
        }
        return new ResponseEntity(body, headers, status);
    }

    //삭제
    @PutMapping("/api/delete-board")
    public ResponseEntity delete_board(@RequestBody BoardDeleteDto boardDeleteDto) {
        System.out.println("삭제된 내용 " + boardDeleteDto);
        HttpHeaders headers = new HttpHeaders();
        Map<String, String> body = new HashMap<>();
        HttpStatus status = HttpStatus.NO_CONTENT; // 204

        try {
            Board board = boardService.findOne(boardDeleteDto.getId());
            boardService.delete(board);

        } catch (Exception e) {
            status = HttpStatus.BAD_REQUEST; // 400 에러
            System.out.println("update_board/에러" + e);
        }
        return new ResponseEntity(body, headers, status);


    }
}
