import React from 'react';
import { storiesOf } from '@storybook/react';

const styles = { paddingTop: '1.0rem', paddingBottom: '1.0rem' };

const TypographyStory = () => (
  <div className="container">
    <div className="row" style={styles}>
      <div className="col-lg-12">
        <h1>Typography</h1>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-lg-12">
        <h4 style={{ marginBottom: '1.0rem' }}>Font Heirarchy</h4>
        <hr style={{ marginTop: 0, marginBottom: 0 }} />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <p>
          The font-family we are using is
          <strong> Source Sans Pro </strong>
          and below are the specs in rem.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <h1>H1 Page Title</h1>
      </div>
      <div className="col-lg-4">
        <h1>Regular 2.8 rems</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <h2>H2 Card Header</h2>
      </div>
      <div className="col-lg-4">
        <h2>Semibold 2.4rem</h2>
      </div>
    </div>

    <div className="row" style={styles}>
      <div className="col-lg-4">
        <h3>H3 Title</h3>
      </div>
      <div className="col-lg-4">
        <h3>Medium 2rem</h3>
      </div>
    </div>

    <div className="row" style={styles}>
      <div className="col-lg-4">
        <h4>H4 Subheader</h4>
      </div>
      <div className="col-lg-4">
        <h4>Regular 1.8rem</h4>
      </div>
    </div>

    <div className="row" style={styles}>
      <div className="col-lg-4">
        <span className="body2">Body 2 / Menu</span>
      </div>
      <div className="col-lg-4">
        <span className="body2">Medium 1.5rem</span>
      </div>
    </div>

    <div className="row" style={styles}>
      <div className="col-lg-4">
        <span className="body">Body 1</span>
      </div>
      <div className="col-lg-4">
        <span className="body">Regular 1.5rem</span>
      </div>
    </div>

    <div className="row" style={styles}>
      <div className="col-lg-4">
        <div className="text-helper">Helper Text</div>
      </div>
      <div className="col-lg-4">
        <div className="text-helper">Regular 1.4rem</div>
      </div>
    </div>

    <div className="row" style={styles}>
      <div className="col-lg-4">
        <span style={{ fontSize: '10px' }}>Base font size</span>
      </div>
      <div className="col-lg-4">
        <span style={{ fontSize: '10px' }}>10 px</span>
      </div>
    </div>
  </div>
);

storiesOf('Styles', module).add('Typography', TypographyStory);
