package com.reactJava.study.dto;

import com.reactJava.study.model.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor // 생성자
@NoArgsConstructor  // 빈생성자
public class TodoDTO {
    private String id;
    private String title;
    private boolean done;

    //캡슐화를 위해한번 감싼다
    // userId가 없는 이유 나중에 서큐리티로 인증이 가능
    //userId를 고유 식별자로 사용. 숨길 수 있으면 숨기는 것이 안전
    public  TodoDTO(final TodoEntity todoEntity){  //아 매개변수에 final 붙일 수 있구나
        this.id = todoEntity.getId();
        this.title = todoEntity.getTitle();
        this.done = todoEntity.isDone();

    }

}
