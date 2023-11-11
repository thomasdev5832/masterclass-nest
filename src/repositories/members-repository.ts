export abstract class MembersRepository {
    abstract create(name: string, role: string): Promise<void>; 
}