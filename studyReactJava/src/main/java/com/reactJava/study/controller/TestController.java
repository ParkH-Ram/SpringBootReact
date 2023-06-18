package com.reactJava.study.controller;

import com.reactJava.study.dto.TestRequestBodyDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("test") // 리소스
public class TestController {
    @GetMapping
    public String testController(){
        return "Hello Man";
    }

    // 매개변수나 PathVariable 값을 받아 오기 위해 @PathVariable 사용
    // required = false 는 매개변수를 입력하지 않아도 된다는 뜻
    @GetMapping("/{id}")
    public String testControllerPathVariable(@PathVariable(required = false) String id) {
        return "hello man" + id;
    }

    //RequestParam을 이용하는 방법
    // @RequestParam을 이용하면 ?id={id}와 같이 요청 매개변수로 넘어오는 값을 변수로 받을 수 있다.
    @GetMapping("/testParam")
    public String testControllerRequestParam(@RequestParam(required = false) String id){
        return "Id : " + id;
    }

    //RequestBody 를 사용하는 방법
    // 보통 반환하고자 하는 리소스가 복잡할 때 사용
    // 기본 자료형이 아닌 오브젝트처럼 복잡한 자료형을 통째로 요청 보내고 싶은 경우
    //RequestBody 는 클래스를 매개변수로

    @GetMapping("/testBody")
    public String testRequestBody(@RequestBody TestRequestBodyDTO requestBodyDTO) {
        return "Id : " + requestBodyDTO.getId() + "message : " + requestBodyDTO.getMessage();
    }

}
