const EditorText: React.FC = () => {
  return (
    <>
      <div> # Welcome to GraphiQL </div>
      <div>#</div>
      <div># GraphiQL is an in -browser tool for writing, validating, and</div>
      <div># testing GraphQL queries.</div>
      <div>#</div>
      <div>
        # Type queries into this side of the screen, and you will see
        intelligent
      </div>
      <div>
        # typeaheads aware of the current GraphQL type schema and live syntax
        and
      </div>
      <div># validation errors highlighted within the text.</div>
      <div>#</div>
      <div>
        # GraphQL queries typically start with a &#123; character. Lines that
        start{' '}
      </div>
      <div># with a </div>
      <div># are ignored.</div>
      <div>#</div>
      <div># An example GraphQL query might look like:</div>
      <div>#</div>
      <div># &#123;</div>
      <div># field(arg: &quot;value&quot;) &#123;</div>
      <div># subField</div>
      <div># &#125;</div>
      <div># &#125;</div>
      <div>#</div>
      <div># Keyboard shortcuts:</div>
      <div>#</div>
      <div># Prettify query: Shift-Ctrl-P (or press the prettify button)</div>
      <div>#</div>
      <div># Merge fragments: Shift-Ctrl-M (or press the merge button)</div>
      <div>#</div>
      <div># Run Query: Ctrl-Enter (or press the play button)</div>
      <div>#</div>
      <div># Auto Complete: Ctrl-Space (or just start typing)</div>
      <div>#</div>
    </>
  );
};

export default EditorText;
