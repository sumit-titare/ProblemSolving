# frozen_string_literal: true

require_relative '../spec_helper'
require_relative '../../lib/string_calculator'

RSpec.describe StringCalculator do
  describe '.add' do
    subject { described_class.add(numbers) }

    context 'when numbers is an empty string' do
      let(:numbers) { '' }

      it 'returns 0' do
        expect(subject).to eq 0
      end
    end

    context 'when numbers contain a single number' do
      let(:numbers) { '1' }

      it 'returns the number itself' do
        expect(subject).to eq 1
      end
    end

    context 'when numbers contain more than one number separated by a comma' do
      let(:numbers) { '1,2,3' }

      it 'returns the sum of all the numbers' do
        expect(subject).to eq 6
      end
    end

    context 'when numbers contain new line between numbers' do
      let(:numbers) { "1\n2,3" }

      it 'returns the sum of all numbers' do
        expect(subject).to eq 6
      end
    end

    context 'when input numbers contain a custom delimiter' do
      let(:numbers) { "//;\n1;2" }

      it 'supports custom delimiter and returns the sum of all numbers' do
        expect(subject).to eq 3
      end
    end
  end
end
