package com.sample.javasespa;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.List;

@Configuration
@EnableWebMvc
@ComponentScan
public class JavasespaConfig extends WebMvcConfigurerAdapter {
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        GsonHttpMessageConverter converter = new GsonHttpMessageConverter();
        converter.setGson(gson());
        converters.add(converter);
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer cfg) {
        // See http://stackoverflow.com/a/23938850/66629
        cfg.setUseSuffixPatternMatch(false);
    }

    @Bean
    public Gson gson() {
        GsonBuilder gsonBuilder = new GsonBuilder();
        com.fatboyindustrial.gsonjavatime.Converters.registerAll(gsonBuilder);
        return gsonBuilder.setPrettyPrinting()
            .disableHtmlEscaping() // http://stackoverflow.com/questions/23363843
            .create();
    }
}
