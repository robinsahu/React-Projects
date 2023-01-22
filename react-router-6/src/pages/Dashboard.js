const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <h2>Hello {user?.name}</h2>
    </section>
  );
};
export default Dashboard;
