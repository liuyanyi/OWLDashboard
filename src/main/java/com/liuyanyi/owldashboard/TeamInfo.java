package com.liuyanyi.owldashboard;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TeamInfo {

    @Id
    private Integer TeamId;

    private String TeamName;

    private String NameAbbr;

    private String Region;

    private String image;

    private String primaryColor;

    private String accentColor;

    public String getPrimaryColor() {
        return primaryColor;
    }

    public void setPrimaryColor(String primaryColor) {
        this.primaryColor = primaryColor;
    }

    public String getAccentColor() {
        return accentColor;
    }

    public void setAccentColor(String accentColor) {
        this.accentColor = accentColor;
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

    public String getNameAbbr() {
        return NameAbbr;
    }

    public void setNameAbbr(String nameAbbr) {
        NameAbbr = nameAbbr;
    }

    public String getRegion() {
        return Region;
    }

    public void setRegion(String region) {
        Region = region;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
