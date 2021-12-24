import { Injectable } from "@angular/core";

@Injectable()
export class residentService{
findAllResidents = () => fetch('http://finalproject-env.eba-uxmtnhqk.us-east-2.elasticbeanstalk.com/api/v1/residents')
.then(response => response.json())
}
