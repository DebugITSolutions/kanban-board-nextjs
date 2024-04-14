
const BoardButton = ({title}) => {
    return (
        <div className={'border border-grey-200 rounded px-2 py-1 cursor-pointer truncate'}>
            {title}
        </div>
    );
};

export default BoardButton;