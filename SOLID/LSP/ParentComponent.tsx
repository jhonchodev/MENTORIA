const ParentComponent: React.FC = () => {
    const handleClick = () => alert("Button clicked!");

    return (
        <div>
            <PrimaryButton label="Primary" onClick={handleClick} />
            <SecondaryButton label="Secondary" onClick={handleClick} />
        </div>
    );
};