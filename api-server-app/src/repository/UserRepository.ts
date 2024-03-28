import { EntityRepository, Repository } from "typeorm";
import { UserApp } from "../domain/userApp";


@EntityRepository(UserApp)
class UserRespository extends Repository<UserApp>{
    

}
export {UserRespository}