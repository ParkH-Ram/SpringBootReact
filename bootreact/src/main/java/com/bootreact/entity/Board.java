package com.bootreact.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@ToString
@Table(name = "board")
public class Board {

    @Id
    private String id;
    private String title;
    private String contents;
    private String date;
    private String fname;
}
