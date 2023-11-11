import { IsNotEmpty } from "class-validator";

export class CreateTeamMemberBody {
    @IsNotEmpty({
        message: 'The member name should not be empty!'
    })
    name: string;
    @IsNotEmpty({
        message: 'The role should not be empty!'
    })
    role: string;
}