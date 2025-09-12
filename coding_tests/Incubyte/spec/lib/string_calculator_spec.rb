# frozen_string_literal: true

require_relative '../spec_helper'
require_relative '../../lib/string_calculator'

RSpec.describe StringCalculator do
  describe '.add' do
    subject { described_class.add(numbers) }

    context 'when numbers is an empty string' do
      let(:numbers) { '' }

      it 'returns 0' do
        expect(subject).to eq(0)
      end
    end
  end
end
