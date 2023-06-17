package com.reactJava.study.dto;
// HTTP 응답으로 사용할 DTO

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseDTO<T> {  // 제네릭을 사용하려면 클래스에 제네릭 설정 해줘야 함

    private  String error;
    private List<T> data;
}
