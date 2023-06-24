package ram.project.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id, title"})
public class Board {
    
    @Id @GeneratedValue
    private Long id;
    
    private String title;
    
    private String content;

    // 생성자
    public Board(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
