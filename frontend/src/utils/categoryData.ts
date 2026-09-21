export const subcategoryMap: Record<string, {name: string, icon: string}[]> = {
  'laptop': [
    { name: 'Gaming Laptop', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' },
    { name: 'Office Laptop', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>' }
  ],
  'pc-hardware': [
    { name: 'CPU', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>' },
    { name: 'RAM', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><line x1="6" y1="17" x2="6" y2="17.01"></line><line x1="10" y1="17" x2="10" y2="17.01"></line><line x1="14" y1="17" x2="14" y2="17.01"></line><line x1="18" y1="17" x2="18" y2="17.01"></line><line x1="4" y1="11" x2="20" y2="11"></line></svg>' },
    { name: 'COOLER', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5"></path><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5"></path><path d="M12 12c0-2.76-2.24-5-5-5s-5 2.24-5 5"></path><path d="M12 12c0 2.76 2.24 5 5 5s5-2.24 5-5"></path><circle cx="12" cy="12" r="2" fill="currentColor"></circle></svg>' },
    { name: 'Motherboard (Intel)', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="10" height="10"></rect><line x1="7" y1="3" x2="7" y2="7"></line><line x1="17" y1="3" x2="17" y2="7"></line><line x1="7" y1="17" x2="7" y2="21"></line><line x1="17" y1="17" x2="17" y2="21"></line></svg>' },
    { name: 'Motherboard (AMD)', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="10" height="10"></rect><line x1="3" y1="7" x2="7" y2="7"></line><line x1="3" y1="17" x2="7" y2="17"></line><line x1="17" y1="7" x2="21" y2="7"></line><line x1="17" y1="17" x2="21" y2="17"></line></svg>' },
    { name: 'GPU', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><circle cx="8" cy="12" r="3"></circle><circle cx="16" cy="12" r="3"></circle><line x1="12" y1="18" x2="12" y2="21"></line><line x1="6" y1="18" x2="6" y2="21"></line><line x1="18" y1="18" x2="18" y2="21"></line></svg>' },
    { name: 'STORAGE', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="14" y2="16"></line></svg>' },
    { name: 'POWERSUPPLY', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line><circle cx="8" cy="16" r="2"></circle><line x1="14" y1="14" x2="18" y2="14"></line><line x1="14" y1="18" x2="18" y2="18"></line></svg>' },
    { name: 'CASE', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect><line x1="6" y1="6" x2="18" y2="6"></line><line x1="6" y1="18" x2="18" y2="18"></line><circle cx="12" cy="12" r="2"></circle></svg>' },
    { name: 'Monitor', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' }
  ],
  'peripherals': [
    { name: 'Keyboard', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M10 14h4"></path></svg>' },
    { name: 'Mouse', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="7" ry="7"></rect><line x1="12" y1="2" x2="12" y2="10"></line><line x1="5" y1="10" x2="19" y2="10"></line></svg>' },
    { name: 'Headset', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>' },
    { name: 'Webcam', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="8"></circle><circle cx="12" cy="10" r="3"></circle><line x1="7" y1="22" x2="17" y2="22"></line><line x1="12" y1="18" x2="12" y2="22"></line></svg>' }
  ],
  'accessories': [
    { name: 'Cables', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 7a4 4 0 1 0 0 8M19 7a4 4 0 1 1 0 8M9 11h6"></path></svg>' },
    { name: 'Hubs & Docks', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="12" x2="6.01" y2="12"></line><line x1="10" y1="12" x2="10.01" y2="12"></line><line x1="14" y1="12" x2="14.01" y2="12"></line><line x1="18" y1="12" x2="18.01" y2="12"></line></svg>' },
    { name: 'Chargers', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>' }
  ],
  'all-in-one': [
    { name: 'Gaming AIO', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' },
    { name: 'Office AIO', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>' }
  ]
}

export const brandMap: Record<string, string[]> = {
  'laptop': ['Apple', 'ASUS', 'MSI', 'Lenovo', 'Dell'],
  'pc-hardware': ['Intel', 'AMD', 'NVIDIA', 'Gigabyte', 'Corsair'],
  'peripherals': ['Logitech', 'Razer', 'Corsair', 'SteelSeries', 'Keychron'],
  'accessories': ['Anker', 'CalDigit', 'Logitech', 'Belkin', 'Satechi'],
  'all-in-one': ['Apple', 'HP', 'Lenovo']
}
