/** Shared UAccordion look used by FaqAccordion and ProductAccordion — only trigger/body typography differs per usage. */
export function accordionUi(trigger: string, body: string) {
  return {
    item: 'border border-line rounded-2xl mb-2 last:mb-0 px-1',
    trigger,
    body
  }
}
