import { Modal, ModalProps, Text } from "@mantine/core";
import AsyncSelect from "../AsyncSelect";
import { User } from "../../models/user";
import './EditGroupMembers.scss'
import { getUserBySearchParams } from "../../http/groups";
import { useRef } from "react";

interface EditGroupMembersProps extends ModalProps{
    groupId: string;
    groupMemers: User[]
}
type UserOption = {label: string, value: User}

const EditGroupMembers: React.FC<EditGroupMembersProps> = ({groupId, opened, onClose, groupMemers}) => {
    const id = groupId;
    console.log(id);

    const timeoutRef = useRef<number | undefined>()
    const loadOptions = (search: string, callback: (options: UserOption[]) => void) => {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(async() => {
            const usersResponse = await getUserBySearchParams(search)
            callback(usersResponse.map(user => ({label: `${user.surname} ${user.name}`, value: user})))
        }, 300)
    }

    
    
    return (
        <Modal opened={opened} onClose={onClose} title='Добавить участника' size='lg' centered className="editMembers">
            <div className="form-group">
                <Text>Участники:</Text>
                <AsyncSelect
                    placeholder='Начните вводить'
                    options={[]}
                    loadOptions={loadOptions}
                />
                <ul className="editMembers-members">
                    {groupMemers.map(member => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
};
export default EditGroupMembers;
