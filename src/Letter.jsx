export default function Letter({ char, color }) {

    console.log(char);
  
    const styles = {
      color: "black",
      fontWeight: "bold",
      borderRadius: 8, // entiendo que son 8px
      padding: 16, // 16 px
      userSelect: 'none',
      width: "16px",
      height: "16px",
      border: "1px solid black",
      textTransform: "uppercase",
      backgroundColor: color
    }
  
    return (
      <div style={styles}>
        {char}
      </div>
    );
  }
