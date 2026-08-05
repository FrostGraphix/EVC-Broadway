export function RunningFooter({ label, page, dark = false }) {
  return (
    <div className={`bw-runfoot ${dark ? 'bw-runfoot--dark' : ''}`} style={dark ? { background: 'var(--navy-deep)' } : undefined}>
      <span>{label}</span>
      <span>{page}</span>
    </div>
  );
}

export default RunningFooter;
