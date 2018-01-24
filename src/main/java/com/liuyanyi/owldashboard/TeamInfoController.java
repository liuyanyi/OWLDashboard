package com.liuyanyi.owldashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
public class TeamInfoController {

    @Autowired
    private TeamInfoRepository teamInfoRepository;

    @GetMapping(value = "/teaminfo")
    public List<TeamInfo> TeamList(){
        return teamInfoRepository.findAll();
    }

    @GetMapping(value = "/teaminfo/{NameAbbr}")
    public TeamInfo TeamOne(@PathVariable("NameAbbr") String NameAbbr){
        List<TeamInfo> teamInfos=teamInfoRepository.findAll();

        for (TeamInfo t : teamInfos) {
            if (t.getNameAbbr().equals(NameAbbr))
                return t;
        }
        return null;
    }
}
