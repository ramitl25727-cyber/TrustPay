import React, { useEffect, useState } from "react";

const PhoneLayout = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();

      hours = hours % 12;
      hours = hours ? hours : 12;

      minutes = minutes < 10 ? `0${minutes}` : minutes;

      setTime(`${hours}:${minutes}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.phoneContainer}>
        {/* Notch */}
        <div style={styles.notch}></div>

        {/* Status Bar */}
        <div style={styles.statusBar}>
          <span>{time}</span>

          <div style={styles.icons}>
            <span>🛜</span>
            <span>🔋</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },

  phoneContainer: {
    width: "375px",
    height: "812px",
    backgroundColor: "#ffffff",
    borderRadius: "40px",
    border: "12px solid #333",
    position: "relative",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },

  notch: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "150px",
    height: "30px",
    backgroundColor: "#333",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    zIndex: 10,
  },

  statusBar: {
    height: "44px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#000",
    zIndex: 1,
  },

  icons: {
    display: "flex",
    gap: "5px",
  },
};

export default PhoneLayout;