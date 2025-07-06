import Layout from '@theme/Layout';

// …imports stay

export default function Cover() {
  return (
    <Layout wrapperClassName="titlePage" noFooter noNavbar>
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: 0 }}>
            Fundamentals of Maths&nbsp;Thought
          </h1>
          <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
            See mathematics, speak its language,<br />
            and settle its truths
          </p>
          {/* ◎ button removed */}
        </div>
      </div>
    </Layout>
  );
}


