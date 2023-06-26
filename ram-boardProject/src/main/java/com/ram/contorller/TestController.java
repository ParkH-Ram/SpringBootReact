package com.ram.contorller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {


    @GetMapping("/hell")
    public String hell(){

        return "hell";
    }
}
