package com.liuyanyi.owldashboard;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class OwlScore implements Comparable<OwlScore>{

    @Id
    private Integer TeamId;

    private String TeamName;

    private String NameAbbr;

    private String Region;

    private Integer Win;

    private Integer Lose;


    public OwlScore() {
    }

    public Integer getTeamId() {
        return TeamId;
    }

    public void setTeamId(Integer teamId) {
        TeamId = teamId;
    }

    public String getTeamName() {
        return TeamName;
    }

    public void setTeamName(String teamName) {
        TeamName = teamName;
    }

    public String getRegion() {
        return Region;
    }

    public void setRegion(String region) {
        Region = region;
    }

    public Integer getWin() {
        return Win;
    }

    public void setWin(Integer win) {
        Win = win;
    }

    public Integer getLose() {
        return Lose;
    }

    public void setLose(Integer lose) {
        Lose = lose;
    }

    public String getNameAbbr() {
        return NameAbbr;
    }

    public void setNameAbbr(String nameAbbr) {
        NameAbbr = nameAbbr;
    }

    @Override
    public int compareTo(OwlScore o) {
        //降序排列，设定大于为-1，小于+1，等于0
        if (this.Win>o.getWin())
            return -1;
        else if(this.Win==o.getWin()){
            if(this.Lose<o.getLose())
                return -1;
            else if (this.Lose==o.getLose())
                if(this.NameAbbr.compareTo(o.getNameAbbr())<0)
                    return -1;
                else if(this.NameAbbr.compareTo(o.getNameAbbr())==0)
                    return 0;
        }
        return 1;
    }
}
