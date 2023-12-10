import { QueryEditor } from '@/components/QueryEditor/QueryEditor';
import { JsonViewer } from '@/components/JsonViewer/JsonViewer';
import { MainNav } from '@/components/MainNav/MainNav';

export default () => {
  return (
    <main>
      <MainNav />
      <QueryEditor />
      <JsonViewer />
    </main>
  );
};
