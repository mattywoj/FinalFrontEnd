import { Injectable } from "@angular/core";

@Injectable()
export class residentService{
findAllResidents = () => fetch('http://localhost:8080/api/v1/residents')
.then(response => response.json())
}
