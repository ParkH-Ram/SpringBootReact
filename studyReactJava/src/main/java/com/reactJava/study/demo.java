package com.reactJava.study;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
public class demo {

    @NotNull
    private String id;
}
