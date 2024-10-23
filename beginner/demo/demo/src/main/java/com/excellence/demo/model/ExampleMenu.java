package com.excellence.demo.model;

public class ExampleMenu {
    public final int id;
    public final String name;

    public int id() {
        return id;
    }
    public String name() {
        return name;
    }

    public ExampleMenu(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
