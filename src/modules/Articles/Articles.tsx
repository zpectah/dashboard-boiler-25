import { useParams } from 'react-router-dom';
import { ViewLayout } from '../../components';
import { useAppDefinitionContext } from '../../context';
import { ArticlesList } from './ArticlesList';
import { ArticlesDetail } from './ArticlesDetail';

const Articles = () => {
  const { id } = useParams();
  const { init, token } = useAppDefinitionContext();

  // TODO: Articles context? - why would i need it?

  return (
    <ViewLayout meta={{ title: 'Articles' }} side={<>Some aside block...init:{init ? 'true' : 'false'}</>}>
      <ArticlesDetail id={id} />
      <ArticlesList />
      <br />
      <br />
      <br />
      sdfhdfghdfg dfg hdfghdfghdfghdfg ___ {token}
      <br />
      <br />
      sdfgsdfgj sdlkf gjlskdjfg lksdj fglkjsdflkgjslj
      <br />
      <br />
      <br />
      sdfhdfghdfg dfg hdfghdfghdfghdfg
      <br />
      <br />
      sdfgsdfgj sdlkf gjlskdjfg lksdj fglkjsdflkgjslj
    </ViewLayout>
  );
};

export default Articles;
