---
title: Contact
sections:
  - section_id: contact
    type: section_contact
    background: gray
    title: Холбоо барих
    content: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus
      quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus
      tortor pretium ligula.
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Нэр
        is_required: true
      - input_type: email
        name: email
        label: имэйл
        is_required: true
      - input_type: select
        name: subject
        label: Сэдэв
        default_value: Please select
        options:
          - Алдаа засах
          - халлижа нартмах
          - дасуБ
          - lorem-ipsum
      - input_type: textarea
        name: message
        label: Зурвас
      - input_type: checkbox
        name: consent
        is_required: true
    submit_label: Send Message
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: landing
---
