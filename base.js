const base = document.createElement("base");
if (location.hostname.includes("github.io")) {
  base.href = "/KOUVERA/";
} else {
  base.href = "/";
}
document.head.appendChild(base);
