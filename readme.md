# OWL Dashboard
It's a simple web project built by Spring Boot

### Tools and Version:

* SpringBoot 1.5.9.RELEASE
* Maven 3
* JetBrains IDEA Ultimate 2017.3.3
* MySQL
* Bootstrap 4.0

### Feature

* A score dashboard.
* Team info.
* No Auto Update. (so you should update score by your own)
* Only a demo for JPA.

### Data Sources

[Overwatch League](http://overwatchleague.com)

[守望先锋联赛](http://overwatchleague.cn)

### Attention

The project need to adjust the configuration file.

Add your own Database in `application-template.yml`and rename it to `application.yml`

Add your own SSL info in `application.yml`, HTTP port should config in `OwlDashBoardApplication.java`

If you don't need HTTPS, you can delete SSL config in `application.yml` and `OwlDashBoardApplication.java`

As well, you should also use `Data.sql` to import data.

### TODO

Add Spring Security Demo.

Add competition information.

Add Viedo player for every competition.
