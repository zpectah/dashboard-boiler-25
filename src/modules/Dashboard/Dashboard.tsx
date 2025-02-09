import { ViewLayout, Card } from '../../components';

const Dashboard = () => {
  return (
    <ViewLayout
      meta={{ title: 'Dashboard' }}
      side={
        <>
          <div>sidebar content</div>
          <div>sidebar content</div>
        </>
      }
    >
      <Card
        title="Card title"
        content="Vivamus egestas, viverra rhoncus donec  fringilla placerat posuere mi orci, aliquam vehicula pulvinar mauris. Facilisis quis, nam varius interdum urna ullamcorper elit elit, justo dignissim dui vel dolor elit. Condimentum ullamcorper, nunc sollicitudin at sem fusce ante vestibulum quam nisl vel purus, nulla at imperdiet quis"
      />
      <Card
        title="Card title"
        content="Vivamus egestas, viverra rhoncus donec  fringilla placerat posuere mi orci, aliquam vehicula pulvinar mauris. Facilisis quis, nam varius interdum urna ullamcorper elit elit, justo dignissim dui vel dolor elit. Condimentum ullamcorper, nunc sollicitudin at sem fusce ante vestibulum quam nisl vel purus, nulla at imperdiet quis"
      />
    </ViewLayout>
  );
};

export default Dashboard;
