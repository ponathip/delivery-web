const navItems = [
  { href: "/", label: "หน้าแรก", icon: "🏠" },
  { href: "/store", label: "ร้าน", icon: "🍱" },
  { href: "/cart", label: "ตะกร้า", icon: "🛒" },
  { href: "/orders", label: "ออเดอร์", icon: "📦" },
  { href: "/profile", label: "บัญชี", icon: "👤" },
];

export default function CustomerBottomNav() {
  return (
    <nav
      style={{
        position: "fixed",
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "28rem",
        height: "72px",
        background: "#fff",
        borderTop: "1px solid #eee",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          style={{
            width: "20%",
            height: "56px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "#6b7280",
            fontSize: "11px",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          <span style={{ fontSize: "20px", marginBottom: "4px" }}>
            {item.icon}
          </span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}