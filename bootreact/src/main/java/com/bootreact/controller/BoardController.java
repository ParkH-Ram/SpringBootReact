package com.bootreact.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bootreact.entity.Board;
import com.bootreact.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class BoardController {


    private BoardRepository boardRepository;


    @Autowired
    public BoardController(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }



    @RequestMapping("/")
    public String index() throws Exception {
        System.out.println("index=====");
        return "/index";
    }

    @RequestMapping("/board.do")
    public String board() throws Exception {
        System.out.println("board=====");
        return "/board";
    }

    @RequestMapping("/board2.do")
    public String board2() throws Exception {
        System.out.println("board2=====");
        return "/board2";
    }

    @RequestMapping("/list.do")
    @ResponseBody
    public Map<String, Object> list() throws Exception {
        System.out.println("list=====");
        Map<String, Object> map = new HashMap<>();
        List<Board> list = new ArrayList<Board>();

        list = boardRepository.findAll();

        map.put("list", list);

        return map;
    }


}