package com.liuyanyi.owldashboard;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter{

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //映射
        registry.addViewController("/error").setViewName("error");
        registry.addViewController("/team").setViewName("team");
        registry.addViewController("/").setViewName("index");

        //跳转
        //registry.addRedirectViewController("/comm","comment.html");
    }
}
