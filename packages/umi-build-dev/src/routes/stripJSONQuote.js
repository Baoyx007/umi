export default function(jsonStr) {
  return jsonStr
    .replace(/\"component\": (\"(.+?)\")/g, (global, m1, m2) => {
      return `"component": ${m2.replace(/\^/g, '"')}`;
    })
    .replace(/\"Route\": (\"(.+?)\")/g, `"Route": $2`)
    .replace(/\\r\\n/g, '\r\n')
    .replace(/\\n/g, '\r\n');
}
