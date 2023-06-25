package ram.project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ram.project.entity.Board;
import ram.project.repository.BoardRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor // final
public class BoardService {

    private final BoardRepository boardRepository;



    public List<Board> findBoards() {
        return boardRepository.findAll();
    }

    public Board findOne(Long boardId) {
        return boardRepository.findById(boardId).orElseThrow(NullPointerException::new);
    }

    @Transactional // 안전하게 db에 생성하기 위해 트랜잭션으로 한번 감싼다
    public void create(Board board) {
        boardRepository.save(board);

    }

    @Transactional // 디비에 작용하니까
    public void update(Long id, String title, String content) {
        Board findBoard = boardRepository.findById(id).orElseThrow(NullPointerException::new); // 영속성 컨텍스트
        findBoard.setTitle(title);
        findBoard.setContent(content);
    }

    @Transactional
    public void delete(Board board) {
        boardRepository.delete(board);
    }
}
