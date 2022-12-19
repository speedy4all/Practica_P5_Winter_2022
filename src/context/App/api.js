const fetchPages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["About", "Dashboard", "Contact"]);
    }, 3000);
  });
};

const fetchPagesAsync = async () => {
  const data = await fetchPages();
  return data;
};

export { fetchPages, fetchPagesAsync };
