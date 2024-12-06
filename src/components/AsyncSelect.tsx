import { GroupBase} from 'react-select';
import ReactSelect, {AsyncProps} from 'react-select/async';
import { colors } from '../helpers/const';
import './AsyncSelect.scss'

export default function AsyncSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: AsyncProps<Option, IsMulti, Group>) {
    return (
        <ReactSelect
            {...props}
            classNames={{
                control: () => 'asyncSelect-control',
            }}
            styles={{
                control: (base) => ({...base, boxShadow: 'none'}),
                indicatorSeparator: (base) => ({...base, backgroundColor: colors.grayInputDark}),
                dropdownIndicator: (base) => ({...base, color: colors.grayInputDark}),
                menu: (base) => ({...base, border: `1px solid ${colors.grayInputDark}`})
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    neutral0: colors.grayInput,
                    neutral30: colors.grayInputDark,
                    neutral20: colors.grayInput,
                    primary: colors.grayInputDark,
                    primary25: colors.grayInputDark
                }
            })}
        />
    );
}
