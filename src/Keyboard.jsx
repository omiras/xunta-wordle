function Key({ children, status }) {
    const styles = {
        color: "black",
        fontWeight: "bold",
        borderRadius: 8, // entiendo que son 8px
        padding: 16, // 16 px
        userSelect: 'none',
        border: "1px solid black",
        textTransform: "uppercase",
        backgroundColor: "aliceblue",
        backgroundColor: status == "present" ? 'green': '#757575'
    }

    return (<div style={styles}>
        {children}
    </div>)
}

export default function Keyboard() {

    // status puede ser undefined, "not-present", "persent"

    return (
        <div style={{
            display: 'flex'
        }}>
            <Key status="">
                ENVIAR
            </Key>
            <Key status="">
                X
            </Key>
            <Key status="not-present">
                Z
            </Key>
            <Key status="present">
                O
            </Key>

            <Key>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
            </Key>
        </div>
    );
}