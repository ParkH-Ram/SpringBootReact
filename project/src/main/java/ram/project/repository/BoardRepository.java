package ram.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ram.project.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
