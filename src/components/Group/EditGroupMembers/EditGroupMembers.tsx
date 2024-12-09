import { Button, Flex, Text } from "@mantine/core";
import AsyncSelect from "../../Shared/AsyncSelect/AsyncSelect";
import { User } from "../../../models/user";
import { addMembers, getUserBySearchParams } from "../../../http/groups";
import { useDebounce } from "../../../hooks/useDebounce";
import { useState } from "react";
import './EditGroupMembers.scss'
import DeleteButton from "../../Shared/DeleteButton/DeleteButton";
import { useAppDispatch } from "../../../hooks/redux";
import DefaultImage from "../../Shared/DefaultImage/DefaultImage";

interface EditGroupMembersProps{
    groupId: string;
    groupMembers: User[];
    toReadMode: () => void
}
type UserOption = {label: string, value: User}

const EditGroupMembers: React.FC<EditGroupMembersProps> = ({groupId, groupMembers, toReadMode}) => {
    const [newMembers, setNewMembers] = useState<User[]>([]);
    const dispatch = useAppDispatch();

    const loadOptions = useDebounce(async(search: string, callback: (options: UserOption[]) => void) => {
        const usersResponse = await getUserBySearchParams(search);
        callback(usersResponse
            .filter(user => [...groupMembers, ...newMembers].every(member => member.id !== user.id))
            .map(user => ({label: `${user.surname} ${user.name}`, value: user})))
    }, 500)

    const handleSave = async () => {
        await addMembers(dispatch, groupId, newMembers)
        toReadMode();
    }

    const handleDeleteNewUser = (userId: string) => setNewMembers(prevState => [...prevState.filter(member => member.id !== userId)])
    
    
    return (
        <Flex direction='column' gap='md' mt='md' className="editMembers">
            <AsyncSelect<UserOption>
                placeholder='Начните вводить'
                defaultOptions={[]}
                loadOptions={loadOptions}
                onChange={(opt) => {
                    if(opt){
                        setNewMembers(prevState => [...prevState, opt.value])
                    }
                }}
                value={null}
            />
            <ul className='groupProfile-members'>
                {groupMembers.map(member => (
                    <Flex align='center' gap='xl' key={member.id}>
                        {member.main_image ? <img className='groupProfile-memberImage' src={member.main_image}/> : <DefaultImage type="user" size="listIcon"/>}
                        <Text fw={700}>{member.surname} {member.name}</Text>
                    </Flex>
                ))}
                {newMembers.map(member => (
                    <li key={member.id}>
                        <Flex justify='space-between' align='center'>
                            <Flex align='center' gap='xl'>
                                {member.main_image ? <img className='groupProfile-memberImage' src={member.main_image}/> : <DefaultImage type="user" size="listIcon"/>}
                                <Text fw={700}>{member.surname} {member.name}</Text>
                            </Flex>
                            <DeleteButton onClick={() => handleDeleteNewUser(member.id)}/>
                        </Flex>
                    </li>
                ))}
            </ul>
            <Flex justify='flex-end' gap='lg'>
                <Button onClick={() => toReadMode()} color="gray">Отмена</Button>
                <Button onClick={handleSave}>Сохранить</Button>
            </Flex>
        </Flex>
    );
};
export default EditGroupMembers;
