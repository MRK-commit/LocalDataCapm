using { demoapp as db } from '../db/data-model';
service empService {
entity Employee as projection on db.Employee;
}