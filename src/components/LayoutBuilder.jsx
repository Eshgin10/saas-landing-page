import './LayoutBuilder.css'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const FeatureCard = ({ title, description, isFirst, isSecond, isThird, isFourth }) => {
  return (
    <div className="lb-card">
      <h3 className="lb-card-title">{title}</h3>
      <p className="lb-card-desc">{description}</p>
      <div className="lb-card-placeholder" aria-hidden="true">
        {isFirst ? (
          <>
            <div className="code-editor-first">
              <div className="code-line-first">
                <span className="line-num-first">1</span>
                <span className="kw-first">function</span> <span className="fn-first">fetchUserData</span>(<span className="param-first">userId</span>) {'{'}
              </div>
              <div className="code-line-first">
                <span className="line-num-first">2</span>
                  <span className="kw-first">const</span> <span className="var-first">response</span> = <span className="kw-first">await</span> <span className="fn-first">fetch</span>(<span className="str-first">`/api/users/${'{userId}'}`</span>);
              </div>
              <div className="code-line-first gap-line">
                <span className="line-num-first">3</span>
                  <span className="comment-first">// validation needed</span>
              </div>
              <div className="code-line-first suggestion-line">
                <span className="line-num-first">4</span>
                  <span className="kw-first">if</span> (!<span className="var-first">response</span>.<span className="fn-first">ok</span>) <span className="kw-first">throw</span> <span className="kw-first">new</span> <span className="fn-first">Error</span>(<span className="str-first">'Failed'</span>);
              </div>
              <div className="code-line-first">
                <span className="line-num-first">5</span>
                  <span className="kw-first">return</span> <span className="kw-first">await</span> <span className="var-first">response</span>.<span className="fn-first">json</span>();
              </div>
              <div className="code-line-first">
                <span className="line-num-first">6</span>
                {'}'}
              </div>
            </div>
            <div className="scan-beam-first"></div>
            <div className="suggestion-cursor-first">✨</div>
            <div className="suggestion-icon-first">🧩</div>
            <div className="ai-cue-first">💬</div>
          </>
        ) : isSecond ? (
          <>
            <div className="sync-line sync-line-1"></div>
            <div className="sync-line sync-line-2"></div>
            <div className="sync-line sync-line-3"></div>
            <div className="sync-line sync-line-4"></div>
            <div className="code-block">
              <div className="code-line"><span className="keyword">function</span> <span className="function-name">calculateTotal</span>(<span className="param">items</span>) {'{'}</div>
              <div className="code-line">  <span className="keyword">let</span> sum = <span className="string">0</span>;</div>
              <div className="code-line">  <span className="keyword">for</span> (<span className="keyword">let</span> item <span className="keyword">of</span> items) {'{'}</div>
              <div className="code-line">    sum += item.price;</div>
              <div className="code-line">  {'}'} <span className="keyword">return</span> sum; {'}'}</div>
            </div>
            <div className="doc-panel">
              <div className="doc-header">calculateTotal()</div>
              <div className="doc-line"><strong>Parameters:</strong></div>
              <div className="doc-line">• items: Array of items</div>
              <div className="doc-line"><strong>Returns:</strong> Total sum</div>
              <div className="doc-line">Calculates sum of prices</div>
              <div className="doc-check">✓</div>
            </div>
          </>
        ) : isThird ? (
          <>
            <div className="debug-editor">
              <div className="code-line-debug">
                <span className="line-num">1</span>
                <span className="kw-debug">function</span> <span className="fn-debug">processData</span>(<span className="var-debug">data</span>) {'{'}
              </div>
              <div className="code-line-debug">
                <span className="line-num">2</span>
                  <span className="kw-debug">const</span> <span className="var-debug">result</span> = data.<span className="fn-debug">map</span>(<span className="var-debug">item</span> =&gt; {'{'}
              </div>
              <div className="code-line-debug error-line">
                <span className="line-num">3</span>
                    <span className="kw-debug">return</span> item.<span className="var-debug">value</span> * <span className="str-debug">2</span>
              </div>
              <div className="code-line-debug">
                <span className="line-num">4</span>
                  {'}'});
              </div>
              <div className="code-line-debug">
                <span className="line-num">5</span>
                  <span className="kw-debug">return</span> <span className="var-debug">result</span>;
              </div>
              <div className="code-line-debug">
                <span className="line-num">6</span>
                {'}'}
              </div>
            </div>
            <div className="scan-bar-debug"></div>
            <div className="warning-icon">⚠️</div>
            <div className="check-icon">✅</div>
            <div className="editor-ripple"></div>
            <div className="debug-complete-icon">🛡️</div>
          </>
        ) : isFourth ? (
          <>
            <div className="scan-bar"></div>
            <div className="review-code-block">
              <div className="review-code-line"><span className="kw">const</span> <span className="var">userData</span> = fetchUser();</div>
              <div className="review-code-line"><span className="kw">if</span> (<span className="var">userData</span>) {'{'}</div>
              <div className="review-code-line problem">  <span className="kw">let</span> <span className="var">usr_nm</span> = <span className="var">userData</span>.name;</div>
              <div className="review-code-line">  <span className="fn">console</span>.log(<span className="var">usr_nm</span>);</div>
              <div className="review-code-line">{'}'}</div>
            </div>
            <div className="tooltip">Rename to match team standards</div>
            <div className="review-panel">
              <div className="review-item success">
                <span className="review-icon">✓</span>
                <span>Naming convention consistent</span>
              </div>
              <div className="review-item success">
                <span className="review-icon">✓</span>
                <span>Indentation correct</span>
              </div>
              <div className="review-item warning">
                <span className="review-icon">⚠</span>
                <span>Variable naming issue</span>
              </div>
              <div className="review-item success">
                <span className="review-icon">✓</span>
                <span>No unused variables</span>
              </div>
              <div className="review-shield">🛡</div>
            </div>
          </>
        ) : (
          <div className="lb-card-placeholder-inner">Visual / Interactive Area</div>
        )}
      </div>
    </div>
  )
}

const LayoutBuilder = () => {
  const [sectionRef, isVisible] = useIntersectionObserver()

  return (
    <section 
      ref={sectionRef}
      className="layout-builder" 
      id="features"
    >
      <div className="lb-container">
        <header className={`lb-header animate-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="lb-title">Features</h2>
          <p className="lb-subtitle">How we keep you in flow while coding</p>
        </header>

        <div className={`lb-grid ${isVisible ? 'cards-visible' : ''}`}>
          <FeatureCard
            title="Contextual Code Suggestions"
            description="Understand your project's architecture and coding patterns, not just generic snippets."
            isFirst
          />
          <FeatureCard
            title="Automated Documentation"
            description="Documentation that actually stays up-to-date as you code."
            isSecond
          />
          <FeatureCard
            title="Intelligent Debugging"
            description="Trace issues across your entire stack with AI-powered analysis."
            isThird
          />
          <FeatureCard
            title="Code Review Automation"
            description="Automated reviews that learn your team's standards and best practices."
            isFourth
          />
        </div>
      </div>
    </section>
  )
}

export default LayoutBuilder



