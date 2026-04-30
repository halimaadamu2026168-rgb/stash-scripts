const ipResp = await fetch('https://api64.ipify.org?format=json');
const { ip } = await ipResp.json();
const geoResp = await fetch(`https://ipapi.co/${ip}/json/`);
const geo = await geoResp.json();

$done({ title: 'External IP', content: `${ip}\n${geo.country_name} · ${geo.org}`, icon: 'globe.asia.australia.fill', backgroundColor: '#5856D6' });
