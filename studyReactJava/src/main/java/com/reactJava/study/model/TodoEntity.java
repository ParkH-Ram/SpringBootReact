package com.reactJava.study.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data  // getter setter toString 등을 해주는 어노테이션
public class TodoEntity {
    private String Id; // 오브젝트 아이디
    private String userId; // 오브젝트를 생성한 유저 아이디
    private String title;  // 투두 타이틀 예
    private boolean done; // true 투두를 완료 한 경우 check
}
