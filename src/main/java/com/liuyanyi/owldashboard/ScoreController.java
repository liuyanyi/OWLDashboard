package com.liuyanyi.owldashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class ScoreController {

    @Autowired
    private ScoreRepository scoreRepository;

    @GetMapping(value = "/scores")
    public List<OwlScore> ScoreList(){
        List<OwlScore> owlScores=scoreRepository.findAll();
        Collections.sort(owlScores);
        return owlScores;
    }

    @GetMapping(value = "/scores/{id}")
    public OwlScore ScoreOne(@PathVariable("id") Integer id){
        return scoreRepository.findOne(id);
    }
}
