# This Vue application is deployed at this ec2 aws address:
http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8080/

![alt text](http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8080/src/images/architecture_project.jpg?t=1715612450630)

Current version : http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8080/

This version sends his requests toward a python/django app who listen at the port 8082:
http://ec2-51-20-9-64.eu-north-1.compute.amazonaws.com:8082/

This project is a Vue.js  project based on the Geriadur project you can see at this github repository address:
https://github.com/riwalld/geriadur


The MVC version of the project (java project with native javascript front-end included) is reachable at the port 8081:
http://ec2-13-50-16-65.eu-north-1.compute.amazonaws.com:8081/