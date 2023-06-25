package ram.project.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import ram.project.entity.Board;

@Data
@NoArgsConstructor
public class BoardDto {

    private Long id;
    private String title;
    private String content;

    public BoardDto(Board board) {
        this.id = board.getId();
        this.title = board.getTitle();
        this.content = board.getContent();
    }
}
